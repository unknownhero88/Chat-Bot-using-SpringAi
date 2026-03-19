package com.example.demo;

import org.jspecify.annotations.Nullable;

public class chat {
	private String prompt;
	private String content;
	
	public chat(String prompt, String content) {
		super();
		this.prompt = prompt;
		this.content = content;
	}
	public String getPrompt() {
		return prompt;
	}
	public void setPrompt(String prompt) {
		this.prompt = prompt;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "chat [prompt=" + prompt + ", content=" + content + "]";
	}
	
}
