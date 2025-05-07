package com.example.demo.dto;

public class PfcRequest {
	private String gender; // 性別
	private int age; // 年齢
	private double height; // 身長
	private double weight; // 体重
	private double bmr; // 基礎代謝
	private double proteinFactor; // たんぱくしつ量
	private double fatGram; // 脂質量
	private double carbGram; // 炭水化物量

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

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public double getProteinFactor() {
		return proteinFactor;
	}

	public void setProteinFactor(double proteinFactor) {
		this.proteinFactor = proteinFactor;
	}

	public double getFatGram() {
		return fatGram;
	}

	public void setFatGram(double fatGram) {
		this.fatGram = fatGram;
	}

	public double getCarbGram() {
		return carbGram;
	}

	public void setCarbGram(double carbGram) {
		this.carbGram = carbGram;
	}

}
