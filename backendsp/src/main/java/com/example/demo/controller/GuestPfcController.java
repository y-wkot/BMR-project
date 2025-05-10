package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PfcRequest;
import com.example.demo.dto.PfcResponse;
import com.example.demo.service.PfcCalculatorService;

@RestController
@RequestMapping("/api/pfc")
public class GuestPfcController {

    @Autowired // PfcCalculatorServiceをDIする（DIとは・・・）
    private PfcCalculatorService service;

    @PostMapping
    public PfcResponse calculatePfc(@RequestBody PfcRequest req) {
        return service.calculate(req); // serviceのクラスにリターン
    }
}
