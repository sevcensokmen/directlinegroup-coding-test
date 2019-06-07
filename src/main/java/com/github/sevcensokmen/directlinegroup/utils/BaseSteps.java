package com.github.sevcensokmen.directlinegroup.utils;

import org.openqa.selenium.WebDriver;

public class BaseSteps {

    public void init() {
        DriverManager.getInstance().init();
    }

    public void cleanup() {
        DriverManager.getInstance().closeAndQuit();
    }

    public WebDriver getDriver() {
        return DriverManager.getInstance().getDriver();
    }

    public void invokeNavigateToPage(String url) {
        DriverManager.getInstance().getDriver().get(url);
    }

}

