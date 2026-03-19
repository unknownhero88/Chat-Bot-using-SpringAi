package com.example.demo;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;





@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:5173")
public class chatController {

	private ChatClient ch;
	
	public chatController(ChatClient.Builder builder) {
		this.ch=builder.build();
	}
	
	ArrayList<chat> data = new ArrayList<chat>();

	@GetMapping("/chat")
	public ResponseEntity<String> chat (@RequestParam(required = true ) String q){
		if (q == null || q.trim().isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .body("Message is empty");
        }
		
		
		
		List<Message> messages = new ArrayList<>();

		for (chat c : data) {
		    messages.add(new UserMessage(c.getPrompt()));
		    messages.add(new AssistantMessage(c.getContent()));
		}

		messages.add(new UserMessage(q));
		
		
		var response=ch.prompt().messages(messages).call().content();
		
		data.add(new chat(q,response));
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/chat/show")
	public ResponseEntity<ArrayList<chat>> show(){
		if(data.isEmpty())
			{
			return ResponseEntity.noContent().build();
			}
			
		return ResponseEntity.ok(data);
	}
}
