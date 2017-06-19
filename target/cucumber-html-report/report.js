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
  "duration": 7245595953,
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
  "duration": 3254420978,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iClickSearchButton()"
});
formatter.result({
  "duration": 230245823,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.iShouldSeeTheResultsPageForTheItem()"
});
formatter.result({
  "duration": 3096650078,
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
  "duration": 29093461,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 36301544,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Lowest_Price_P_P()"
});
formatter.result({
  "duration": 4711638201,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Lowest_Price_P_P()"
});
formatter.result({
  "duration": 2219926843,
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
  "duration": 2190466235,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 1208492699,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Lowest_Price()"
});
formatter.result({
  "duration": 7853041217,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Lowest_Price()"
});
formatter.result({
  "duration": 3624241896,
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
  "duration": 852746935,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 1123699439,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByHighestPrice()"
});
formatter.result({
  "duration": 6216212771,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByHighestPrice()"
});
formatter.result({
  "duration": 2168155734,
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
  "duration": 22855694,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 43877644,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_select_sort_by_Highest_Price_P_P()"
});
formatter.result({
  "duration": 7150089475,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_results_sorted_by_Highest_Price_P_P()"
});
formatter.result({
  "duration": 2049316021,
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
  "duration": 1258588053,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 215659277,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByNewlyListed()"
});
formatter.result({
  "duration": 7587289165,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByNewlyListed()"
});
formatter.result({
  "duration": 6062904621,
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
  "duration": 323895196,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 627784001,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByEndingSoonest()"
});
formatter.result({
  "duration": 4165378879,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByEndingSoonest()"
});
formatter.result({
  "duration": 6232477714,
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
  "duration": 1090840760,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 1461895290,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByNearestFirst()"
});
formatter.result({
  "duration": 5392932090,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByNearestFirst()"
});
formatter.result({
  "duration": 3708538591,
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
  "duration": 573149034,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.i_see_the_sort_dropdown()"
});
formatter.result({
  "duration": 721161040,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSelectSortByBestMatch()"
});
formatter.result({
  "duration": 4797000128,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.iSeeTheResultsSortedByBestMatch()"
});
formatter.result({
  "duration": 3425432639,
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
  "duration": 857629973,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 1179413523,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByAllListings()"
});
formatter.result({
  "duration": 4600919548,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByAllListings()"
});
formatter.result({
  "duration": 1418687006,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 2952827359,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 1571537675,
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
  "duration": 494774038,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 299696497,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByAuction()"
});
formatter.result({
  "duration": 640561624,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByAuction()"
});
formatter.result({
  "duration": 3727742644,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyTheNumberOfBidsAppliedIsDisplayed()"
});
formatter.result({
  "duration": 616678680,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 1661485699,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 243297329,
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
  "duration": 560869016,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheFilters()"
});
formatter.result({
  "duration": 278830473,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSelectFilterByBuyItNow()"
});
formatter.result({
  "duration": 1234335640,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.iSeeTheResultsFilteredByBuyItNow()"
});
formatter.result({
  "duration": 3835685364,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyThePriceOfFirstItem()"
});
formatter.result({
  "duration": 1122931557,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyFreepostageAvailabilityForFirstItem()"
});
formatter.result({
  "duration": 793729588,
  "status": "passed"
});
formatter.match({
  "location": "FilterSteps.verifyBuyItNowIsDisplayed()"
});
formatter.result({
  "duration": 450725647,
  "status": "passed"
});
});