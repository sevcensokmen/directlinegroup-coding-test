package com.github.sevcensokmen.directlinegroup.runners;

import com.github.sevcensokmen.directlinegroup.utils.BaseSteps;
import com.github.sevcensokmen.directlinegroup.utils.DriverManager;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.Before;
import org.testng.annotations.*;

import java.util.HashMap;
import java.util.Map;

@CucumberOptions(
        plugin = {
                "json:target/positive/cucumber.json",
                "html:target/positive/cucumber.html",
                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"
        },
        features = "src/test/resources/features",
        glue = "com/github/sevcensokmen/directlinegroup/steps",
        tags = {
                "@find-vehicle"
        }

)

public class RunCukesTest extends AbstractTestNGCucumberTests {

    @BeforeClass
    public static void setup() {
        Map<String, String> systemInfo = new HashMap<String, String>();
        systemInfo.put("Cucumber version", "v1.2.3");
        systemInfo.put("Extent Cucumber Reporter version", "v1.1.0");
    }
}
