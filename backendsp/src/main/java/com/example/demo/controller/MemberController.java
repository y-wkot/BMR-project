package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Member;
import com.example.demo.service.MemberService;

@RestController
@RequestMapping("/api")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Member member) {
        if (memberService.isNameTaken(member.getName())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("そのユーザー名はすでに使われています。");
        }
        memberService.registerMember(member.getName(), member.getPassword());
        return ResponseEntity.ok("登録が完了しました！");
    }
}