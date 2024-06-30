package com.example.tipcalculator;

import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.text.NumberFormat;

public class MainActivity extends AppCompatActivity
        implements TextView.OnEditorActionListener, View.OnClickListener {

    private String billAmountString = "";
    private float tipPercent = .15f;

    // Define variables for the user interface controls we want to interact with
    private EditText billAmountEditText;
    private TextView percentTextView;
    private Button percentUpButton;
    private Button percentDownButton;
    private TextView tipTextView;
    private TextView totalTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Apply window insets
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return WindowInsetsCompat.CONSUMED;
        });

        // Get references to the UI controls
        billAmountEditText = findViewById(R.id.billAmountEditText);
        percentTextView = findViewById(R.id.percentTextView);
        percentUpButton = findViewById(R.id.percentUpButton);
        percentDownButton = findViewById(R.id.percentDownButton);
        tipTextView = findViewById(R.id.tipTextView);
        totalTextView = findViewById(R.id.totalTextView);

        // Set the listeners
        billAmountEditText.setOnEditorActionListener(this);
        percentDownButton.setOnClickListener(this);
        percentUpButton.setOnClickListener(this);
    }

//    @Override
//    protected void onSaveInstanceState(@NonNull Bundle outState) {
//        super.onSaveInstanceState(outState);
//
//        outState.putString("billAmountString", billAmountString);
//        outState.putFloat("tipPercent", tipPercent);
//    }
//
//    @Override
//    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
//        super.onRestoreInstanceState(savedInstanceState);
//
//        if(savedInstanceState != null) {
//            billAmountString = savedInstanceState.getString("billAmountString", "");
//            tipPercent = savedInstanceState.getFloat("tipPercent", 0.15f);
//
//            billAmountEditText.setText(billAmountString);
//            calculateAndDisplay();
//        }
//    }

    void calculateAndDisplay() {
        // Get the bill amount
        billAmountString = billAmountEditText.getText().toString();
        float billAmount;

        if (billAmountString.equals("")) {
            billAmount = 0;
        } else {
            billAmount = Float.parseFloat(billAmountString);
        }

        // Calculate tip and total
        float tipAmount = billAmount * tipPercent;
        float totalAmount = billAmount + tipAmount;

        // Display the result with formatting
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        tipTextView.setText(currency.format(tipAmount));
        totalTextView.setText(currency.format(totalAmount));

        NumberFormat percent = NumberFormat.getPercentInstance();
        percentTextView.setText(percent.format(tipPercent));
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.percentDownButton) {
            tipPercent = tipPercent - 0.01f;
            calculateAndDisplay();
        } else if (id == R.id.percentUpButton) {
            tipPercent = tipPercent + 0.01f;
            calculateAndDisplay();
        }
    }

    @Override
    public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        calculateAndDisplay();
        return false;
    }
}
