
package Steps;


import org.apache.commons.lang3.ArrayUtils;
import org.openqa.selenium.interactions.Actions;
import java.util.List;
import java.util.concurrent.TimeUnit;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertTrue;

public class SortSteps {

    @Given("^I see the sort dropdown$")
    public void i_see_the_sort_dropdown() throws Throwable {
        verifySortDropdown();

    }

    @When("^I select sort by Lowest Price \\+ P&P$")
    public void i_select_sort_by_Lowest_Price_P_P() throws Throwable {
        selectSortDropdown();
        selectSortOption("Lowest price + P&P");
    }

    @Then("^I see the results sorted by Lowest Price \\+ P&P$")
    public void i_see_the_results_sorted_by_Lowest_Price_P_P() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Lowest price + P&P"));

    }

    @When("^I select sort by Lowest Price$")
    public void i_select_sort_by_Lowest_Price() throws Throwable {
        selectSortDropdown();
        selectSortOption("Lowest price");
    }

    @Then("^I see the results sorted by Lowest Price$")
    public void i_see_the_results_sorted_by_Lowest_Price() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Lowest price"));

    }

    @When("^I select sort by Highest Price$")
    public void iSelectSortByHighestPrice() throws Throwable {
        selectSortDropdown();
        selectSortOption("Highest price");
    }

    @Then("^I see the results sorted by Highest Price$")
    public void iSeeTheResultsSortedByHighestPrice() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Highest price"));
    }

    @When("^I select sort by Highest Price \\+ P&P$")
    public void i_select_sort_by_Highest_Price_P_P() throws Throwable {
        selectSortDropdown();
        selectSortOption("Highest price + P&P");
    }

    @Then("^I see the results sorted by Highest Price \\+ P&P$")
    public void i_see_the_results_sorted_by_Highest_Price_P_P() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Highest price + P&P"));

    }


    @When("^I select sort by Ending soonest$")
    public void iSelectSortByEndingSoonest() throws Throwable {
        selectSortDropdown();
        selectSortOption("Ending soonest");
    }

    @Then("^I see the results sorted by Ending soonest$")
    public void iSeeTheResultsSortedByEndingSoonest() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Ending soonest"));
    }

    @When("^I select sort by Newly listed$")
    public void iSelectSortByNewlyListed() throws Throwable {
        selectSortDropdown();
        selectSortOption("Newly listed");
    }

    @Then("^I see the results sorted by Newly listed$")
    public void iSeeTheResultsSortedByNewlyListed() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Newly listed"));
    }

    @When("^I select sort by Nearest first$")
    public void iSelectSortByNearestFirst() throws Throwable {
        selectSortDropdown();
        selectSortOption("Nearest First");
    }

    @Then("^I see the results sorted by Nearest first$")
    public void iSeeTheResultsSortedByNearestFirst() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Nearest First"));
    }


    @When("^I select sort by Best Match$")
    public void iSelectSortByBestMatch() throws Throwable {
        Driver.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        selectSortDropdown();
        selectSortOption("Best Match");
    }

    @Then("^I see the results sorted by Best Match$")
    public void iSeeTheResultsSortedByBestMatch() throws Throwable {
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        assert(sortDropdown.getText().equals("Best Match"));
    }

    public void verifySortDropdown() throws InterruptedException{
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        sortDropdown.isDisplayed();
    }

    public void selectSortDropdown() throws InterruptedException{
        WebElement sortDropdown = Driver.driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        sortDropdown.click();
    }

    /**
     * Select the Sort option
     * @param {string} "Lowest price + P&P","Lowest Price", "Highest price", "Highest price + P&P", "Newly listed", "Ending soonest", "Nearest First"
     * @example selectSortOption "Lowest price"
     */
    public void selectSortOption(String string) throws InterruptedException {
        String[] availableOptions={"Lowest price + P&P","Lowest price", "Highest price", "Highest price + P&P", "Newly listed", "Ending soonest", "Nearest First", "Best Match"};
        assertTrue(ArrayUtils.contains(availableOptions, string));
        Thread.sleep(3000);
        //WebElement mainElement = driver.findElement(By.linkText("Best Match"));
        Actions action = new Actions(Driver.driver);
        WebElement subElement = Driver.driver.findElement(By.linkText(string));
        action.moveToElement(subElement).click().perform();
    }
}

