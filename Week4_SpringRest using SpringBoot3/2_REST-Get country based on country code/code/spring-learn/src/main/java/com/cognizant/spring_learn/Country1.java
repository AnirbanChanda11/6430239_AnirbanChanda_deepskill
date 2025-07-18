package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country1 {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country1.class);

    private String code;
    private String name;

    public Country1() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("Inside getCode.");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode.");
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName.");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName.");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}

