Feature: eBay Search Sort and Filter
  As a new customer (Not logged in) on eBay,
  I want to be able to shop for an item I want,
  to look for the cheapest item available and use the filtering options available

  Scenario: Search an item
    Given I open eBay Homepage
    When I search for item "iphone"
    And I click Search button
    Then I see the results page for the item

  Scenario: Sort item by Lowest Price + P&P
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Lowest Price + P&P
    Then I see the results sorted by Lowest Price + P&P

  Scenario: Sort item by Lowest Price
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Lowest Price
    Then I see the results sorted by Lowest Price

  Scenario: Sort item by Highest Price
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Highest Price
    Then I see the results sorted by Highest Price

  Scenario: Sort item by Highest Price + P&P
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Highest Price + P&P
    Then I see the results sorted by Highest Price + P&P

  Scenario: Sort item by Newly listed
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Newly listed
    Then I see the results sorted by Newly listed

  Scenario: Sort item by Ending soonest
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Ending soonest
    Then I see the results sorted by Ending soonest

  Scenario: Sort item by Nearest First
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Nearest first
    Then I see the results sorted by Nearest first

  Scenario: Sort item by Best Match
    Given I see the results page for the item
    And I see the sort dropdown
    When I select sort by Best Match
    Then I see the results sorted by Best Match

  Scenario: Filter item by All Listings
    Given I see the results page for the item
    And I see the filters
    When I select filter by All Listings
    Then I see the results filtered by All Listings
    And Verify the price of first item
    And Verify freepostage availability for first item

  Scenario: Filter item by Auction
    Given I see the results page for the item
    And I see the filters
    When I select filter by Auction
    Then I see the results filtered by Auction
    And Verify the number of bids applied is displayed
    And Verify the price of first item
    And Verify freepostage availability for first item

  Scenario: Filter item by Buy it now
    Given I see the results page for the item
    And I see the filters
    When I select filter by Buy it now
    Then I see the results filtered by Buy it now
    And Verify the price of first item
    And Verify freepostage availability for first item
    And Verify buy it now is displayed