package com.meuprojeto.Share_Tools.controller;

import com.meuprojeto.Share_Tools.model.Tool;
import com.meuprojeto.Share_Tools.repository.ToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tools")
public class ToolController {
    @Autowired
    private ToolRepository toolRepository;

    @GetMapping
    public List<Tool> getAllTools() {
        return toolRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tool> getToolById(@PathVariable Long id) {
        Optional<Tool> tool = toolRepository.findById(id);
        return tool.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Tool> createTool(@RequestBody Tool tool) {
        Tool savedTool = toolRepository.save(tool);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTool);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tool> updateTool(@PathVariable Long id, @RequestBody Tool updatedTool) {
        if (!toolRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updatedTool.setId(id);
        Tool savedTool = toolRepository.save(updatedTool);
        return ResponseEntity.ok(savedTool);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTool(@PathVariable Long id) {
        if (!toolRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        toolRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
