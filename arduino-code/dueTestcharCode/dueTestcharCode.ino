char userInput;

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    userInput = Serial.read();
    if(userInput == '1') {
      Serial.println("LED On");
      digitalWrite(13, HIGH);
    } else if(userInput == '0') {
      Serial.println("LED Off");
      digitalWrite(13, LOW);
    }
  }
}
