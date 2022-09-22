package com.holiday.HolidayBackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HolidayRepo extends JpaRepository<HolidayBooking, String> {

    HolidayBooking findByTitle(String title);
}
