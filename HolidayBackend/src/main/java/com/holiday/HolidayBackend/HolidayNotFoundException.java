package com.holiday.HolidayBackend;

import javax.persistence.EntityNotFoundException;

public class HolidayNotFoundException extends EntityNotFoundException {
    HolidayNotFoundException() {
        super("The holiday you are looking for is not in the data base");
    }
}
