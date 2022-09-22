package com.holiday.HolidayBackend;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "holidayBookings")
public class HolidayBooking {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy="uuid")
    private String Id;
    @Column(name = "DAY_START")
    private int dayStart;
    @Column(name = "MONTH_START")
    private int monthStart;
    @Column(name = "YEAR_START")
    private int yearStart;
    @Column(name = "DAY_FINISH")
    private int dayFinish;
    @Column(name = "MONTH_FINISH")
    private int monthFinish;
    @Column(name = "YEAR_FINISH")
    private int yearFinish;

    @Column(name = "TITLE")
    private String title;
    @Lob
    @Column(name = "HOLIDAY_INFO", length = 512)
    private String holidayInfo;

    public HolidayBooking() {
    }


    public HolidayBooking( int dayStart, int monthStart, int yearStart, int dayFinish, int monthFinish, int yearFinish, String title, String holidayInfo) {
        this.dayStart = dayStart;
        this.monthStart = monthStart;
        this.yearStart = yearStart;
        this.dayFinish = dayFinish;
        this.monthFinish = monthFinish;
        this.yearFinish = yearFinish;
        this.title = title;
        this.holidayInfo = holidayInfo;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public int getDayStart() {
        return dayStart;
    }

    public void setDayStart(int dayStart) {
        this.dayStart = dayStart;
    }

    public int getMonthStart() {
        return monthStart;
    }

    public void setMonthStart(int monthStart) {
        this.monthStart = monthStart;
    }

    public int getYearStart() {
        return yearStart;
    }

    public void setYearStart(int yearStart) {
        this.yearStart = yearStart;
    }

    public int getDayFinish() {
        return dayFinish;
    }

    public void setDayFinish(int dayFinish) {
        this.dayFinish = dayFinish;
    }

    public int getMonthFinish() {
        return monthFinish;
    }

    public void setMonthFinish(int monthFinish) {
        this.monthFinish = monthFinish;
    }

    public int getYearFinish() {
        return yearFinish;
    }

    public void setYearFinish(int yearFinish) {
        this.yearFinish = yearFinish;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getHolidayInfo() {
        return holidayInfo;
    }

    public void setHolidayInfo(String holidayInfo) {
        this.holidayInfo = holidayInfo;
    }
}