import { React, useState, useEffect } from "react";
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Checkbox,
    Row,
    Col,
    Switch,
    Space,
} from "antd";

export default function CourseSearchForm({ fetchCourses }) {
    const classificationOpts = [
        { key: "fys", value: "First Year Seminar" },
        { key: "di", value: "Diversity Intensive" },
        { key: "dir", value: "Diversity Intensive - Race" },
        { key: "arts", value: "Arts" },
        { key: "honors", value: "Honors" },
        { key: "service", value: "Service Learning" },
    ];

    const handleFormSubmit = (formData) => {
        console.log("Here's the form data:", formData);
        // fetchCourses is a function defined in the parent component (App.jsx).
        // It was passed into this component as a prop.
        fetchCourses(formData);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
                style: { fontWeight: "600" },
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={handleFormSubmit}
            className="bg-white p-6 lg:rounded-md mx-auto border-gray-200 border mb-6"
        >
            <Row>
                <Col xs={20} md={12}>
                    {/* Title */}
                    <Form.Item label="Course Title" name="title">
                        <Input />
                    </Form.Item>

                    {/* Special Designations */}
                    <Form.Item name="classifications" label="Designation:">
                        <Checkbox.Group>
                            <Space direction="vertical">
                                {classificationOpts.map((opt) => (
                                    <Checkbox key={opt.key} value={opt.key}>
                                        {opt.value}
                                    </Checkbox>
                                ))}
                            </Space>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col xs={20} md={12}>
                    {/* Instructor */}
                    <Form.Item label="Instructor" name="instructor">
                        <Input />
                    </Form.Item>

                    {/* Department */}
                    <Form.Item label="Department" name="department">
                        <Select>
                            <Select.Option value="">Any</Select.Option>

                            {/* React Task 2:
                                replace these hardcoded ones with ones 
                                that are coming from the /api/departments endpoint. 
                                You will need to use the useEffect and useState React 
                                functions. 
                            */}
                            <Select.Option key="CSCI" value="CSCI">
                                CSCI
                            </Select.Option>
                            <Select.Option key="NM" value="NM">
                                NM
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Credit Hours */}
                    <Form.Item label="Credit Hours" name="hours">
                        <InputNumber
                            style={{
                                width: "100px",
                            }}
                        />
                    </Form.Item>

                    {/* Days */}
                    <Form.Item name="days" label="Days:">
                        <Checkbox.Group>
                            <Space>
                                {["M", "T", "W", "R", "F"].map((day) => (
                                    <Checkbox key={day} value={day}>
                                        {day}
                                    </Checkbox>
                                ))}
                            </Space>
                        </Checkbox.Group>
                    </Form.Item>

                    {/* Open Only */}
                    <Form.Item
                        label="Open Only:"
                        name="open"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <Form.Item
                        wrapperCol={{
                            offset: 9,
                            span: 16,
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-blue-900 hover:bg-blue-800"
                        >
                            Search
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}
