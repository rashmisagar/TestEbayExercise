package Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Driver {

    public static WebDriver driver;

    /**
     * Fires up a firefox browser which is then used by the pageObjects to trigger browser events.
     */
    public static void initialiseDriver(){
        System.setProperty("webdriver.firefox.marionette","/Users/rashmisagarsen/IdeaProjects/jars_n_execs/geckodriver");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();

    }

}
