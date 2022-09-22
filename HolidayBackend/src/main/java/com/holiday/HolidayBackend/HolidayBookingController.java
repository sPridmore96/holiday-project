package com.holiday.HolidayBackend;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class HolidayBookingController {

    @Autowired
    HolidayRepo holidayRepo;

    @ExceptionHandler
    public ResponseEntity<String> handleException(Exception e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    @GetMapping("/holidays")
    public ResponseEntity<List<HolidayBooking>> getHolidays() {
        List<HolidayBooking> holidayBookings = holidayRepo.findAll();
        return ResponseEntity.status(HttpStatus.FOUND).body(holidayBookings);
    }

    @GetMapping("/holidays/{id}")
    public ResponseEntity<Optional<HolidayBooking>> getHolidayBookingById(@PathVariable String id){
        Optional<HolidayBooking> foundHoliday = holidayRepo.findById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(foundHoliday);
    }

    @PostMapping("/holidays")
    public ResponseEntity<String> createHoliday(@RequestBody HolidayBooking holidayBooking){
        holidayRepo.save(holidayBooking);
        return ResponseEntity.status(HttpStatus.CREATED).body("Holiday Booking Created");
    }

    @DeleteMapping("/holidays/{id}")
    public ResponseEntity<String> deleteHoliday(@PathVariable String id){
        holidayRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Holiday Booking has been deleted");
    }

    @PutMapping("/holidays/update/{id}")
    public ResponseEntity<String> updateHoliday(@PathVariable String id, @RequestBody HolidayBooking updatedHolidayBooking){
        holidayRepo.save(updatedHolidayBooking);
        return ResponseEntity.status(HttpStatus.OK).body("Your holiday has been updated");
    }
}
