package pages;


import static org.junit.Assert.assertTrue;
import org.apache.commons.lang3.ArrayUtils;
import junit.framework.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;


public class ResultsPage{

    WebDriver driver;

    public ResultsPage(WebDriver driver) {

        this.driver = driver;
    }

    @FindBy(id = "gh-ac")
    private WebElement searchInputField;

    @FindBy(id = "gh-btn")
    private WebElement searchButton;

    @FindBy(css = "#DashSortByContainer > ul.sel > li > a")
    private WebElement sortDropdown;

/*    @FindBy(linkText="Auction")
    private WebElement Auction;

    @FindBy(linkText="Time: ending soonest")
    private WebElement endSoon;

    @FindBy(linkText="Price + Shipping: lowest first")
    private WebElement lowerFirst;

    @FindBy(linkText="Price + Shipping: highest first")
    private WebElement higherFirst;

    @FindBy(linkText="Distance: nearest first")
    private WebElement distanceNear;

    @FindBy(linkText="Best Match")
    private WebElement bestMatch;

    @FindBy(linkText="Time: newly listed")
    private WebElement newList;*/


    public void verifySortDropdown() throws InterruptedException{
        WebElement sortDropdown = driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
        sortDropdown.isDisplayed();
    }

    public void selectSortDropdown() throws InterruptedException{
        WebElement sortDropdown = driver.findElement(By.cssSelector("#DashSortByContainer > ul.sel > li > a"));
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
        Actions action = new Actions(driver);
        WebElement subElement = driver.findElement(By.linkText(string));
        action.moveToElement(subElement).click().perform();
    }

    /**
     * Click on the filter Button for All Listings, Auction or Buy it now
     * @param //All Listings, Auction or {Buy it now}
     * @example filtering "Auction"
     */
    public void selectFilterOption(String string) {
        String[] availableOptions= {"All Listings","Auction", "Buy it now"};
        assertTrue(ArrayUtils.contains(availableOptions, string));
        WebElement e1 = driver.findElement(By.linkText(string));
        e1.click();
    }

    /**
     * Verify if the product passed by id is available for "Free Postage"
     * @param //id of the product
     * @example isElementFreePostage "item2113c7fb69"
     */
    public void isElementFreePostage(String string) {
        WebElement e1 = driver.findElement(By.id(string));
        String verify = e1.getText();
        assertTrue(verify.contains("Free Postage"));
    }


    /*public HomePage openPage(WebDriver driver) {

        return super.initPage(driver, ResultsPage.class);
    }

    public void typeSearchString(HomePageDetails details) {
        System.out.println("typeSearchString function called");
        searchBox.sendKeys(details.getSearchString());
    }
    public void searchProductEntered(){
        buttonSearch.click();
    }

    @SuppressWarnings("deprecation")
    public void verifyProductListed(HomePageDetails details) {

        Assert.assertTrue(driver.getPageSource().contains(details.getSearchString()));

    }


    public void searchByGivenType(String searchBy,HomePageDetails details) throws InterruptedException {


        (new WebDriverWait(driver, 50))
                .until(ExpectedConditions.titleContains(details.getSearchString()));

        System.out.println(driver.getTitle());

        try {

            new WebDriverWait(driver, 30).until(ExpectedConditions.invisibilityOfElementWithText(By.linkText(searchBy),searchBy));

        } catch (WebDriverException e) {
            throw new Error("Element is not traceable");
        }
        System.out.println(driver.getTitle());

        WebElement moveonmenu = driver.findElement(By.xpath("//*[@id='DashSortByContainer']/ul[1]/li/a"));
        System.out.println(moveonmenu.getText());
        moveonmenu.sendKeys(Keys.RETURN);
        moveonmenu.click();
        WebDriverWait wait = new WebDriverWait(driver, 15);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(searchBy)));
        driver.findElement(By.linkText(searchBy)).click();



    }
    public void filterBy(String filterby){

        try {

            new WebDriverWait(driver, 30).until(ExpectedConditions.elementToBeClickable(By.linkText(filterby)));

        } catch (WebDriverException e) {
            throw new Error("Element is not clickable");
        }
        System.out.println(this.driver.getTitle());
        driver.findElement(By.linkText(filterby)).click();
    }*/

}

