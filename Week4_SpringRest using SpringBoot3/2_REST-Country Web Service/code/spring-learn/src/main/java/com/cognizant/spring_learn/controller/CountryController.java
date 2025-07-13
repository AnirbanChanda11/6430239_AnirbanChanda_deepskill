package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country1;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country1 getCountryIndia() {
        LOGGER.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country1 country = (Country1)context.getBean("country", Country1.class);
        LOGGER.debug("Country : {}", country.toString());
        LOGGER.info("END");
        return country;
    }
}

