package com.example.demo.controller;

import jakarta.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PfcRequest;

@RestController
@RequestMapping("/api/pfc")
public class PfcController {

//  @Autowired
//  private PfcService pfcService; データベース未実装のためスキップさせる　renderでmysql使えない どうしよう

  @PostMapping("/save") // PFC計算結果を保存する
  public ResponseEntity<?> savePfc(@RequestBody PfcRequest request, HttpSession session) {
    Integer userId = (Integer) session.getAttribute("userId"); // ログインユーザーのIDを取得する（今は動いてない）
    if (userId == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("ログインしていません");
    }

//    pfcService.save(userId, request);　同上
    return ResponseEntity.ok("保存完了");
  }
}
