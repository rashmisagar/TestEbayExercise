package cucumberTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features"
        ,glue={"Steps"},
        monochrome = true,
        plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" }
)

public class EbayTestRunner {

}

