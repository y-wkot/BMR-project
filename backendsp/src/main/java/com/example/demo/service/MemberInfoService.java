package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MemberInfo;
import com.example.demo.repository.MemberInfoRepository;

@Service
public class MemberInfoService {

	@Autowired
	private MemberInfoRepository memberInfoRepository;

	public void saveMemberInfo(MemberInfo info) {
		memberInfoRepository.save(info);
	}

	public MemberInfo getInfoByMemberId(Integer memberId) {
		return memberInfoRepository.findByMemberId(memberId);
	}
}