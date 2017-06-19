package pages;

import static org.junit.Assert.assertTrue;
import org.apache.commons.lang3.ArrayUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.By;

/**
 * PageObject for common logic of all pages.
 */

public class HomePage {

    WebDriver driver;

    public HomePage(WebDriver driver) {

        this.driver = driver;
    }

    public void inputSearchValue(String text) throws InterruptedException {
        WebElement e1 = driver.findElement(By.id("gh-ac"));
        assertTrue(e1.isEnabled());
        e1.clear();
        e1.sendKeys(text);
    }

    public void clickSearchButton() {
        WebElement searchButton = driver.findElement(By.id("gh-btn"));
        searchButton.click();
    }

    public void clickShopByCategoryButton() {
        WebElement shopByCategoryButton = driver.findElement(By.id("gh-shop-a"));
        shopByCategoryButton.click();
    }

}
