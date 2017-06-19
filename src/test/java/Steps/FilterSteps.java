
package Steps;

import Steps.Driver;
import java.util.List;
import java.util.concurrent.TimeUnit;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.lang3.ArrayUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertTrue;

public class FilterSteps {


    @Given("^I see the filters$")
    public void iSeeTheFilters() throws Throwable {
        WebElement filters = Driver.driver.findElement(By.cssSelector("div.left:nth-child(2)"));
        filters.isDisplayed();
    }

    @When("^I select filter by Auction$")
    public void iSelectFilterByAuction() throws Throwable {
        Driver.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement auctionFilter = Driver.driver.findElement(By.cssSelector("a.small:nth-child(2)"));
        auctionFilter.click();
    }

    @Then("^I see the results filtered by Auction$")
    public void iSeeTheResultsFilteredByAuction() throws Throwable {
        WebElement auctionFilter = Driver.driver.findElement(By.cssSelector("span.small"));
        auctionFilter.isSelected();
    }

    @Then("^Verify the number of bids applied is displayed$")
    public void verifyTheNumberOfBidsAppliedIsDisplayed() throws Throwable {
        WebElement numberOfBids = Driver.driver.findElement(By.className("lvformat"));
        numberOfBids.isDisplayed();
        String bids = numberOfBids.getText();
        String results = "bids";
        assert(bids.contains(results));
    }

    @Then("^Verify the price of first item$")
    public void verifyThePriceOfFirstItem() throws Throwable {
        WebElement priceItem = Driver.driver.findElement(By.className("lvprice"));
        priceItem.isDisplayed();
    }

    @Then("^Verify freepostage availability for first item$")
    public void verifyFreepostageAvailabilityForFirstItem() throws Throwable {
        List<WebElement> webElements = Driver.driver.findElements(By.id("ResultSetItems"));
        WebElement firstElement = webElements.get(0);
        String itemID = firstElement.getAttribute("id");
        isElementFreePostage(itemID);

    }

    @When("^I select filter by All Listings$")
    public void iSelectFilterByAllListings() throws Throwable {
        Driver.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement allListingsFilter = Driver.driver.findElement(By.cssSelector("span.small"));
        allListingsFilter.click();
    }

    @Then("^I see the results filtered by All Listings$")
    public void iSeeTheResultsFilteredByAllListings() throws Throwable {
        WebElement allListingsFilter = Driver.driver.findElement(By.cssSelector("span.small"));
        allListingsFilter.isSelected();
    }

    @When("^I select filter by Buy it now$")
    public void iSelectFilterByBuyItNow() throws Throwable {
        Driver.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement buyNowFilter = Driver.driver.findElement(By.cssSelector("a.small:nth-child(3)"));
        buyNowFilter.click();
    }

    @Then("^I see the results filtered by Buy it now$")
    public void iSeeTheResultsFilteredByBuyItNow() throws Throwable {
        WebElement buyNowFilter = Driver.driver.findElement(By.cssSelector("span.small"));
        buyNowFilter.isSelected();
    }

    @Then("^Verify buy it now is displayed$")
    public void verifyBuyItNowIsDisplayed() throws Throwable {
        WebElement buyItNow = Driver.driver.findElement(By.className("lvformat"));
        buyItNow.isDisplayed();
        /*String buy = buyItNow.getText();
        String results = "Buy it now";
        assert(buy.equals(results));*/
    }

    /**
     * Click on the filter Button for All Listings, Auction or Buy it now
     * @param //All Listings, Auction or {Buy it now}
     * @example selectFilterOption "Auction"
     */
    public void selectFilterOption(String string) {
        String[] availableOptions= {"All Listings","Auction", "Buy it now"};
        assertTrue(ArrayUtils.contains(availableOptions, string));
        WebElement e1 = Driver.driver.findElement(By.linkText(string));
        e1.click();
    }

    /**
     * Verify if the product passed by id is available for "Free Postage"
     * @param //id of the product
     * @example isElementFreePostage "item2113c7fb69"
     */
    public void isElementFreePostage(String string) {
        WebElement e1 = Driver.driver.findElement(By.id(string));
        String verify = e1.getText();
        assertTrue(verify.contains("Free Postage"));
    }

}

