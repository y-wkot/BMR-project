package com.example.demo.dto;

public class BmrResponse {
	private double bmr;
	private double weight;

	public BmrResponse(double bmr) {
		this.bmr = bmr;
	}

	public double getBmr() {
		return bmr;
	}

	public void setBmr(double bmr) {
		this.bmr = bmr;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}
}
