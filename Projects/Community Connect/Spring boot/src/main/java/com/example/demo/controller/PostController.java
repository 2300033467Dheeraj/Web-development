package com.example.demo.controller;

import com.example.demo.dto.PostRequest;
import com.example.demo.model.Post;
import com.example.demo.model.User;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    @Autowired  // Constructor injection is preferred
    public PostController(PostRepository postRepository, UserRepository userRepository, ObjectMapper objectMapper) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/")
    @Transactional
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/category/{categoryName}")
    @Transactional
    public ResponseEntity<List<Post>> getPostsByCategory(@PathVariable String categoryName) {
        List<Post> posts = postRepository.findByCategory(categoryName);
        return ResponseEntity.ok(posts);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createPost(@RequestBody PostRequest postRequest) {
        Optional<User> userOptional = userRepository.findById(postRequest.getUserId());
        if (!userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found.");
        }
        User author = userOptional.get();

        Post newPost = new Post(postRequest.getTitle(), postRequest.getContent(), postRequest.getCategory(), author);
        postRepository.save(newPost);
        return ResponseEntity.status(HttpStatus.CREATED).body("Post created successfully!");
    }

	public ObjectMapper getObjectMapper() {
		return objectMapper;
	}
}

@Configuration
class JacksonConfig {
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        // Register the Hibernate5Module to handle Hibernate proxies
        Hibernate5Module hibernate5Module = new Hibernate5Module();
        hibernate5Module.configure(Hibernate5Module.Feature.FORCE_LAZY_LOADING, false);
        objectMapper.registerModule(hibernate5Module);
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        return objectMapper;
    }
}
