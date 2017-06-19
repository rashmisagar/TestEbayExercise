$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "eBay Search Sort and Filter",
  "description": "As a new customer (Not logged in) on eBay,\nI want to be able to shop for an item I want,\nto look for the cheapest item available and use the filtering options available",
  "id": "ebay-search-sort-and-filter",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search an item",
  "description": "",
  "id": "ebay-search-sort-and-filter;search-an-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open eBay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for item \"iphone\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I see the results page for the item",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iOpeneBayHomepage()"
});
formatter.result({
  "duration": 9680041358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 19
    }
  ],
  "location": "SearchSteps.iSearchForItem(String)"
});
formatter.result({
  "duration": 2805471465,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iClickSearchButton()"
});
formatter.result({
  "duration": 176572182,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 3181934106,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sort item by Lowest Price + P\u0026P",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-lowest-price-+-p\u0026p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select sort by Lowest Price + P\u0026P",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I see the results sorted by Lowest Price + P\u0026P",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 15699797,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 32347141,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Lowest_Price_P_P()"
});
formatter.result({
  "duration": 4510739389,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Lowest_Price_P_P()"
});
formatter.result({
  "duration": 2514331069,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Sort item by Lowest Price",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-lowest-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select sort by Lowest Price",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see the results sorted by Lowest Price",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 20901187,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 26725551,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Lowest_Price()"
});
formatter.result({
  "duration": 5038228450,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Lowest_Price()"
});
formatter.result({
  "duration": 2481683483,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Sort item by Highest Price",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-highest-price",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select sort by Highest Price",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I see the results sorted by Highest Price",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 23455454,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 28464242,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByHighestPrice()"
});
formatter.result({
  "duration": 4659366915,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByHighestPrice()"
});
formatter.result({
  "duration": 2375935991,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sort item by Highest Price + P\u0026P",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-highest-price-+-p\u0026p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select sort by Highest Price + P\u0026P",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I see the results sorted by Highest Price + P\u0026P",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 20469367,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 32197297,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Highest_Price_P_P()"
});
formatter.result({
  "duration": 5500022178,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Highest_Price_P_P()"
});
formatter.result({
  "duration": 3555221498,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Sort item by Newly listed",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-newly-listed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select sort by Newly listed",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I see the results sorted by Newly listed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 736837522,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 908972263,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByNewlyListed()"
});
formatter.result({
  "duration": 8032708951,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByNewlyListed()"
});
formatter.result({
  "duration": 2475616265,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Sort item by Ending soonest",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-ending-soonest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select sort by Ending soonest",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I see the results sorted by Ending soonest",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 20280898,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 22833558,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByEndingSoonest()"
});
formatter.result({
  "duration": 4648790270,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByEndingSoonest()"
});
formatter.result({
  "duration": 2289845584,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Sort item by Nearest First",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-nearest-first",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select sort by Nearest first",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I see the results sorted by Nearest first",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 12174220,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 27956893,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByNearestFirst()"
});
formatter.result({
  "duration": 4760924276,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByNearestFirst()"
});
formatter.result({
  "duration": 3737779940,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Sort item by Best Match",
  "description": "",
  "id": "ebay-search-sort-and-filter;sort-item-by-best-match",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I see the sort dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select sort by Best Match",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I see the results sorted by Best Match",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 172898324,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 115098872,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByBestMatch()"
});
formatter.result({
  "duration": 3979758531,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByBestMatch()"
});
formatter.result({
  "duration": 3621978877,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Filter item by All Listings",
  "description": "",
  "id": "ebay-search-sort-and-filter;filter-item-by-all-listings",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I see the filters",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I select filter by All Listings",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I see the results filtered by All Listings",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Verify the price of first item",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Verify freepostage availability for first item",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 89015383,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 18507355,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByAllListings()"
});
formatter.result({
  "duration": 196776341,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByAllListings()"
});
formatter.result({
  "duration": 168926530,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 50988775,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 8295860007,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Filter item by Auction",
  "description": "",
  "id": "ebay-search-sort-and-filter;filter-item-by-auction",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I see the filters",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I select filter by Auction",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I see the results filtered by Auction",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Verify the number of bids applied is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Verify the price of first item",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Verify freepostage availability for first item",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 260270902,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 598188844,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByAuction()"
});
formatter.result({
  "duration": 1484437056,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByAuction()"
});
formatter.result({
  "duration": 3336998911,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyTheNumberOfBidsAppliedIsDisplayed()"
});
formatter.result({
  "duration": 315642497,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 62514664,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 5539033414,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Filter item by Buy it now",
  "description": "",
  "id": "ebay-search-sort-and-filter;filter-item-by-buy-it-now",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "I see the results page for the item",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I see the filters",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I select filter by Buy it now",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I see the results filtered by Buy it now",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify the price of first item",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Verify freepostage availability for first item",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Verify buy it now is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 249396976,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 524200219,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByBuyItNow()"
});
formatter.result({
  "duration": 5255713175,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByBuyItNow()"
});
formatter.result({
  "duration": 4989394554,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 1419023656,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 8487706440,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyBuyItNowIsDisplayed()"
});
formatter.result({
  "duration": 79305920,
  "status": "passed"
});
});