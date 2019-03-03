package io.github.julianjupiter.springbootandreactjs.exception;

public class ResourceNotFoundException extends ApiException {
    public ResourceNotFoundException(String message, String path) {
        super(message, path);
    }
}
