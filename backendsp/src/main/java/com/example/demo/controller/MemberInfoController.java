package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BmrRequest;

@RestController
public class MemberInfoController {

    @PostMapping("/calculate-bmr")
    public double calculateBmr(@RequestBody BmrRequest request) {
        String gender = request.getGender();
        int age = request.getAge();
        int height = (int) request.getHeight();
        int weight = (int) request.getWeight();
        double intensity = request.getExerciseIntensity();

        double bmr;

        if (gender.equalsIgnoreCase("male")) {
            bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
        } else if (gender.equalsIgnoreCase("female")) {
            bmr = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
        } else {
            return -1; // 不正な性別
        }

        return bmr * intensity;
    }
}
