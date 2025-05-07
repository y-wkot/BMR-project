package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BmrRequest;
import com.example.demo.dto.BmrResponse;

@RestController
@RequestMapping("/api")
public class BmrController {

    @PostMapping("/calculate")
    public BmrResponse calculate(@RequestBody BmrRequest request) {
        double bmr;

        if ("man".equalsIgnoreCase(request.getGender())) {
            bmr = 13.397 * request.getWeight() + 4.799 * request.getHeight()
                    - 5.677 * request.getAge() + 88.362;
        } else {
            bmr = 9.247 * request.getWeight() + 3.098 * request.getHeight()
                    - 4.33 * request.getAge() + 447.593;
        }

        bmr *= request.getExerciseIntensity();
        return new BmrResponse(bmr);
    }
}
