package com.github.sevcensokmen.directlinegroup.pages;


import com.github.sevcensokmen.directlinegroup.utils.Constant;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;


public class HomeVWFinancialServicesPage {

    private final WebDriver driver;

    private String registrationNumber;

    public HomeVWFinancialServicesPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterRegistrationNumber(String vehicleRegistration) {
        setRegistrationNumber(vehicleRegistration);
        driver.findElement(By.id("vehicleReg")).sendKeys(vehicleRegistration);
    }

    private void setRegistrationNumber(String vehicleRegistration) {
        this.registrationNumber = vehicleRegistration;
    }


    public void clickFindVehicleBtn() {
        driver.findElement(By.xpath("//span[contains(text(),'Find vehicle')]")).click();
    }

    public String findVehicleRegAssert() {
        try {
            By by = By.xpath("//div[@class='result']");
            if (isElementPresent(by)) {
                return driver.findElement(by).getText();
            }
        } catch (NoSuchElementException e) {
            return Constant.EMPTY_STRING;
        }
        return Constant.EMPTY_STRING;

    }

    public boolean isElementPresent(By by) {
        try {
            WebElement element = driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }

    }

}