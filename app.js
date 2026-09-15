// LocalFix Application Logic - Production-resilient initialization & filtering

var currentFilters = {
  category: "all",
  customService: "",
  city: "All Cities",
  locality: "All Localities",
  availableToday: false,
  sortBy: "rating"
};

var activeDetailProvider = null;
var activeContactProvider = null;
var toastTimeout = null;

// Safe Data Accessors
function getProvidersData() {
  if (typeof window !== "undefined" && Array.isArray(window.PROVIDERS_DATA) && window.PROVIDERS_DATA.length > 0) {
    return window.PROVIDERS_DATA;
  }
  if (typeof PROVIDERS_DATA !== "undefined" && Array.isArray(PROVIDERS_DATA) && PROVIDERS_DATA.length > 0) {
    return PROVIDERS_DATA;
  }
  return [];
}

function getCitiesData() {
  if (typeof window !== "undefined" && window.CITIES_DATA) {
    return window.CITIES_DATA;
  }
  if (typeof CITIES_DATA !== "undefined") {
    return CITIES_DATA;
  }
  return {
    "All Cities": ["All Localities"]
  };
}

function getServicesData() {
  if (typeof window !== "undefined" && window.SERVICES) {
    return window.SERVICES;
  }
  if (typeof SERVICES !== "undefined") {
    return SERVICES;
  }
  return [];
}

// Self-healing App Initialization
var initAttempts = 0;
function initApp() {
  var data = getProvidersData();
  var cities = getCitiesData();

  if ((!data || data.length === 0 || !cities || Object.keys(cities).length === 0) && initAttempts < 60) {
    initAttempts++;
    setTimeout(initApp, 50);
    return;
  }

  populateLocalityDropdowns(currentFilters.city, currentFilters.locality);
  renderProviders();
  setupKeyboardEvents();
}

// Execute immediately if DOM is already ready (Netlify optimized scripts)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Secondary fallback on window load
window.addEventListener("load", function() {
  var grid = document.getElementById("providersGrid");
  if (!grid || grid.children.length === 0) {
    initApp();
  }
});

// Dynamic Locality population based on City
function populateLocalityDropdowns(city, selectedLocality) {
  if (!selectedLocality) selectedLocality = "All Localities";
  var cities = getCitiesData();
  var localities = cities[city] || ["All Localities"];

  var heroLoc = document.getElementById("heroLocalitySelect");
  var secLoc = document.getElementById("localitySecondaryFilter");
  var headerCity = document.getElementById("headerCityLabel");

  if (headerCity) {
    headerCity.textContent = city === "All Cities" ? "All Cities" : city;
  }

  var optionsHTML = localities.map(function(loc) {
    var isSelected = loc === selectedLocality ? "selected" : "";
    return '<option value="' + loc + '" ' + isSelected + '>' + loc + '</option>';
  }).join("");

  if (heroLoc) heroLoc.innerHTML = optionsHTML;
  if (secLoc) secLoc.innerHTML = optionsHTML;
}

// Filter and Sort Engine
function getFilteredProviders() {
  var data = getProvidersData();
  var customQuery = (currentFilters.customService || "").trim().toLowerCase();

  return data.filter(function(provider) {
    // 1. City Match
    var cityMatch = currentFilters.city === "All Cities" || provider.city === currentFilters.city;

    // 2. Locality Match
    var localityMatch = currentFilters.locality === "All Localities" || provider.locality === currentFilters.locality;

    // 3. Availability Match
    var availabilityMatch = !currentFilters.availableToday || provider.isAvailableToday;

    // 4. Service / Category Match
    var serviceMatch = false;

    if (currentFilters.category === "all") {
      serviceMatch = true;
    } else if (currentFilters.category === "other") {
      if (!customQuery) {
        serviceMatch = true;
      } else {
        var matchName = (provider.name || "").toLowerCase().indexOf(customQuery) !== -1;
        var matchService = (provider.service || "").toLowerCase().indexOf(customQuery) !== -1;
        var matchCategory = (provider.category || "").toLowerCase().indexOf(customQuery) !== -1;
        var matchAbout = (provider.about || "").toLowerCase().indexOf(customQuery) !== -1;
        var matchServicesOffered = provider.servicesOffered && provider.servicesOffered.some(function(s) {
          return s.toLowerCase().indexOf(customQuery) !== -1;
        });

        serviceMatch = matchName || matchService || matchCategory || matchAbout || matchServicesOffered;
      }
    } else {
      serviceMatch = provider.category === currentFilters.category;
    }

    return cityMatch && localityMatch && availabilityMatch && serviceMatch;
  }).sort(function(a, b) {
    switch (currentFilters.sortBy) {
      case "rating":
        return b.rating - a.rating || b.reviewCount - a.reviewCount;
      case "experience":
        return b.experience - a.experience;
      case "price-low":
        return a.startingPrice - b.startingPrice;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });
}
