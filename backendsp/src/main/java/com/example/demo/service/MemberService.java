//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.model.Member;
//import com.example.demo.repository.MemberRepository;
//
//@Service
//public class MemberService {
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    public boolean isNameTaken(String name) {
//        return memberRepository.findByName(name).isPresent();
//    }
//
//    public Member registerMember(String name, String password) {
//        Member member = new Member();
//        member.setName(name);
//        member.setPassword(password); // 実際にはパスワードのハッシュ化を検討してください
//        return memberRepository.save(member);
//    }
//}