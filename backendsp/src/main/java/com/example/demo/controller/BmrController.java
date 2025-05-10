package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BmrRequest;
import com.example.demo.dto.BmrResponse;

@RestController // REST APIのコントローラとして機能
@RequestMapping("/api") // URLパスのベースは/api
public class BmrController {

    @PostMapping("/calculate") // POSTリクエスト/api/calculateから受け取り、BMRを計算して返すよ
    public BmrResponse calculate(@RequestBody BmrRequest request) {
        double bmr;

        // 有名なハリスベネディクト計算式だよ☆
        if ("man".equalsIgnoreCase(request.getGender())) {
            bmr = 13.397 * request.getWeight() + 4.799 * request.getHeight()
                    - 5.677 * request.getAge() + 88.362;
        } else {
            bmr = 9.247 * request.getWeight() + 3.098 * request.getHeight()
                    - 4.33 * request.getAge() + 447.593;
        }

        bmr *= request.getExerciseIntensity(); // 運動強度をかけるよ！
        return new BmrResponse(bmr); // BmrResponseにリターンするよ！
    }
}
