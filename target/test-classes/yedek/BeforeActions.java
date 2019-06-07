package yedek;

import com.github.sevcensokmen.directlinegroup.utils.BaseSteps;
import cucumber.api.java.Before;

    public class BeforeActions extends BaseSteps {

        @Before
        public void setUp() {
            this.setupDriver();
            //DriverManager.setUpDriver();
        }
    }

