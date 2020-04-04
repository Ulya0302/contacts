package ru.finashka.contacts.shared.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Response<T> {
    private boolean success = true;
    private T data;
    private String msg;

    public Response(T data) {
        this.data = data;
    }

    public Response() {
    }

    public Response(Throwable ex) {
        this.success = false;
        this.msg = ex.getMessage();
    }
}
