package springDemoMVC.demo.com;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;



@ComponentScan("springDemoMVC.demo.com")
@Configuration

public class DemoCustomerConfig {

	public @Bean DemoCustomerBean customerBean() {
	    return new DemoCustomerBean();
	  }
}
