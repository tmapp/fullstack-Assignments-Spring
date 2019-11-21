package springDemoMVC.demo.com;

import org.springframework.stereotype.Component;

@Component
public class DemoCustomerBean {
	
	public int addNumber(int a, int b) {
		
		return a+b;
	}
	
	public int substractNumber(int a, int b) {
		
		return a-b;
	}
	
	public int multiplyNumber(int a, int b) {
		
		return a*b;
	}


}
