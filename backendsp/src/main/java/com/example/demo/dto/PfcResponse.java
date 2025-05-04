package com.example.demo.dto;

public class PfcResponse {
	private double protein;
	private double fat;
	private double carb;
	private double totalCalories;
	
	
	public PfcResponse(double protein, double fat, double carb, double totalCalories) {
		this.protein = protein;
		this.fat = fat;
		this.carb = carb;
		this.totalCalories = totalCalories;
	}

	public double getProtein() {
		return protein;
	}

	public void setProtein(double protein) {
		this.protein = protein;
	}

	public double getFat() {
		return fat;
	}

	public void setFat(double fat) {
		this.fat = fat;
	}

	public double getCarb() {
		return carb;
	}

	public void setCarb(double carb) {
		this.carb = carb;
	}

	public double getTotalCalories() {
		return totalCalories;
	}

	public void setTotalCalories(double totalCalories) {
		this.totalCalories = totalCalories;
	}


}