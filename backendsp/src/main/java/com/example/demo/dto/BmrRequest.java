package com.example.demo.dto;
//てすとa
public class BmrRequest {
	private String gender; // 性別
	private int age; // 年齢
	private double height; // 身長
	private double weight; // 体重
	private double exerciseIntensity; //運動強度

	// getter & setter
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getExerciseIntensity() {
		return exerciseIntensity;
	}

	public void setExerciseIntensity(double exerciseIntensity) {
		this.exerciseIntensity = exerciseIntensity;
	}
}
