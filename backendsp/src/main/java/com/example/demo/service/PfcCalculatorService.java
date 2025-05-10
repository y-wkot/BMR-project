package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PfcRequest;
import com.example.demo.dto.PfcResponse;

@Service
public class PfcCalculatorService {

	public PfcResponse calculate(PfcRequest req) {
		double proteinGram = req.getWeight() * 2.0;
		double proteinKcal = proteinGram * 4;

		double fatGram = req.getWeight() * 0.8;
		double fatKcal = fatGram * 9;

		double remainingKcal = req.getBmr() - (proteinKcal + fatKcal);
		double carbGram = remainingKcal / 4;
		
		// double totalCalories = proteinKcal + fatKcal + remainingKcal;

		return new PfcResponse(proteinGram, fatGram, carbGram, req.getBmr());
	}
}

