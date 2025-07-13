package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country1;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country1 getCountry(String code) {
        LOGGER.info("START");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country1> countries = (List<Country1>) context.getBean("countryList");

        // Case-insensitive search using lambda
        Country1 country = countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        LOGGER.debug("Country found: {}", country);
        LOGGER.info("END");

        return country;
    }
}

