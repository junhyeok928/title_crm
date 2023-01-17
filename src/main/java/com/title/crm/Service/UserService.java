package com.title.crm.Service;

import com.title.crm.Entity.User;
import com.title.crm.Entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> userList(){
        return userRepository.findAll();
    }

    public void insertUser(User user){
        userRepository.save(user);
    }

    public Optional<User> fetchUserByID(int id) {
        return userRepository.findById(id);
    }

    public void updateUser(User updateUser) {
        userRepository.save(updateUser);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);

    }
}
