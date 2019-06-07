package com.github.sevcensokmen.directlinegroup.steps;

import com.github.sevcensokmen.directlinegroup.pages.HomeVWFinancialServicesPage;
import com.github.sevcensokmen.directlinegroup.utils.BaseSteps;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindVehicleSteps extends BaseSteps {

    public HomeVWFinancialServicesPage homeVWFinancialServicesPage;

    @Before
    public void setUp() {
        init();
        homeVWFinancialServicesPage = new HomeVWFinancialServicesPage(getDriver());
    }

    @Given("^I navigate to url \"([^\"]*)\"$")
    public void i_navigate_to_url(String webSiteURL) throws Throwable {
        invokeNavigateToPage(webSiteURL);
    }

    @When("^I enter \"([^\"]*)\" vehicle registration number$")
    public void i_enter_vehicle_registration_number(String registrationNumber) throws Throwable {
        homeVWFinancialServicesPage.enterRegistrationNumber(registrationNumber);
    }

    @When("^I click on find vehicle button$")
    public void i_click_on_find_vehicle_button() {
        homeVWFinancialServicesPage.clickFindVehicleBtn();
    }

    @Then("^I should see the following message \"([^\"]*)\"$")
    public void i_should_see_the_following_message(String expectationMessage) throws Throwable {
        String actualMessage = homeVWFinancialServicesPage.findVehicleRegAssert();

        Assert.assertEquals(actualMessage, expectationMessage);
    }

    @After()
    public void LogoutAndTakeScreenshotOnFailure(Scenario scenario) throws Throwable {
        if (getDriver() != null && scenario.isFailed()) {
            scenario.embed(((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES), "image/png");
            Thread.sleep(3000);
        }
        Thread.sleep(2000);
        cleanup();
    }

}
