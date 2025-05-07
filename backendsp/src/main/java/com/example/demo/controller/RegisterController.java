//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.model.Member;
//import com.example.demo.service.MemberService;
//
//@RestController
//@RequestMapping("/api")
//public class RegisterController {
//
//    @Autowired
//    private MemberService memberService;
//
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody Member request) {
//        if (memberService.isNameTaken(request.getName())) {
//            return ResponseEntity.status(409).body("ユーザー名が既に使用されています");
//        }
//        memberService.registerMember(request.getName(), request.getPassword());
//        return ResponseEntity.ok("登録完了");
//    }
//}

// いまのとこ不要