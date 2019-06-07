package yedek;


import com.github.sevcensokmen.directlinegroup.utils.BaseSteps;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;

    public class AfterActions extends BaseSteps {

/*        @After
        public static void tearDown(Scenario scenario) {

            WebDriver seleniumDriver = DriverManager.getInstance().getDriver();
            System.out.println(scenario.isFailed());
            if (scenario.isFailed()) {
                byte[] screenshotBytes = ((TakesScreenshot) seleniumDriver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshotBytes, "image/png");

            }
            DriverManager.tearDown();
        }

*/
        @After()
        public void LogoutAndTakeScreenshotOnFailure(Scenario scenario) throws Throwable {
            if (getDriver() != null && scenario.isFailed()) {
                scenario.embed(((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES), "image/png");
                Thread.sleep(3000);
                this.invokeLogout();
            }
            Thread.sleep(2000);
            this.closeWebDriver(); // it is for testers to see

        }
    }


