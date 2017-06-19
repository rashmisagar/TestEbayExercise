package Steps;

import pages.HomePage;
import pages.ResultsPage;
import java.util.concurrent.TimeUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


public class SearchSteps {

    public HomePage homePage;
    public ResultsPage resultsPage;
    private String baseURL = "http://www.ebay.co.uk/";
    private String productToSearch = ("iPhone");
    //private List<HomePageDetails> searchStringList;

    @Given("^I open eBay Homepage$")
    public void iOpeneBayHomepage() throws Throwable {
        Driver.initialiseDriver();
        Driver.driver.get(baseURL);
    }

    @When("^I search for item \"([^\"]*)\"$")
    public void iSearchForItem(String item) throws Throwable {
        WebElement element = Driver.driver.findElement(By.id("gh-ac"));
        element.sendKeys(item);
        Driver.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @When("^I click Search button")
    public void iClickSearchButton() throws Throwable {
        WebElement searchbtn = Driver.driver.findElement(By.id("gh-btn"));
        searchbtn.click();
    }

    @Then("^I see the results page for the item$")
    public void iShouldSeeTheResultsPageForTheItem() throws Throwable {
        Driver.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        String item = Driver.driver.getTitle();
        String results = "iphone | eBay";
        assert(item.equals(results));

    }

}
