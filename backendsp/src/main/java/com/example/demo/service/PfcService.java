package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PfcRequest;

@Service
public class PfcService {

//  @Autowired
//  private JdbcTemplate jdbc;　データベース未実装のためスキップ

  public void save(int userId, PfcRequest request) {
//    String sql = "UPDATE member_info SET weight=?, bmr=?, protein_factor=?, fat=?, carb=? WHERE id=?";
//    jdbc.update(sql,request.getWeight(),request.getBmr(),request.getProteinFactor(),request.getFatGram(),request.getCarbGram(),      // 同上
//    		  userId);　同上
	  System.out.println("saveメソッド呼び出し：userId = " + userId);
	    System.out.println("PFC内容：" + request.toString());
  }
}
