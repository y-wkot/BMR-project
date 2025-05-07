package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PfcRequest;

@Service
public class PfcService {

  @Autowired
  private JdbcTemplate jdbc;

  public void save(int userId, PfcRequest request) {
    String sql = "UPDATE member_info SET weight=?, bmr=?, protein_factor=?, fat=?, carb=? WHERE id=?";
    jdbc.update(sql,request.getWeight(),request.getBmr(),request.getProteinFactor(),request.getFatGram(),request.getCarbGram(),      // 同上
    		  userId);
  }
}
